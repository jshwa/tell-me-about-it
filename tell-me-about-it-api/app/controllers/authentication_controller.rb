class AuthenticationController < ApplicationController
    def github
      authenticator = Authenticator.new
      user_info = authenticator.github(params[:code])
      
      login = user_info[:login]
      name = user_info[:name]
      github_id = user_info[:github_id]
      avatar_url = user_info[:avatar_url]
      oauth_token = user_info[:access_token]
      
      token = TokenHandler.encode(github_id)
      User.where(github_id: github_id).first_or_create!(
        name: name,
        login:login,
        avatar_url: avatar_url
      )
      
      redirect_to "#{issuer}/users?token=#{token}&login=#{login}&oauth=#{oauth_token}"
    rescue StandardError => error
      redirect_to "#{issuer}?error=#{error.message}"
    end
  
    private
  
    def issuer
      ENV['CLIENT_URL']
    end
  end