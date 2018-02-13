module TokenHandler
    def self.encode(sub)
        payload = {
            iss: ENV['CLIENT_URL'],
            sub: sub,
        }
        JWT.encode payload, ENV['JWT_SECRET'], 'HS256'
    end

    def self.decode(token)
        options = {
            iss: ENV['CLIENT_URL'],
            verify_iss: true,
            algorithm: 'HS256'
        }
        JWT.decode token, ENV['JWT_SECRET'], true, options
    end
end