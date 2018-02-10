class Authenticator
    def initialize(connection = Faraday.new)
        @connection = connection
    end

    def github(code)
        access_token_resp = fetch_github_access_token(code)
        access_token = access_token_resp['access_token']
        user_info_resp = fetch_github_user_info(access_token)

        {
        issuer: 'localhost:3000',
        login: user_info_resp['login'],
        name: user_info_resp['name'],
        avatar_url: user_info_resp['avatar_url']
        }
    end

    private

    def fetch_github_access_token(code)
        resp = @connection.post "https://github.com/login/oauth/access_token", {
        code:          code,
        client_id:     ENV['GITHUB_CLIENT_ID'],
        client_secret: ENV['GITHUB_CLIENT_SECRET']
        }
        raise IOError, 'FETCH_ACCESS_TOKEN' unless resp.success?
        URI.decode_www_form(resp.body).to_h
    end

    def fetch_github_user_info(access_token)
        resp = @connection.get "https://api.github.com/user", {
        access_token: access_token
        }
        raise IOError, 'FETCH_USER_INFO' unless resp.success?
        JSON.parse(resp.body)
    end
end