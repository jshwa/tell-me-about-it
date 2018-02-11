class AuthenticationController < ApplicationController
    def github
      authenticator = Authenticator.new
      user_info = authenticator.github(params[:code])
      
      login = user_info[:login]
      name = user_info[:name]
      github_id = user_info[:github_id]
      avatar_url = user_info[:avatar_url]
      
      token = TokenHandler.encode(login)
      User.where(github_id: github_id).first_or_create!(
        name: name,
        login:login,
        avatar_url: avatar_url
      )
      redirect_to "#{issuer}?token=#{token}"
    rescue StandardError => error
      redirect_to "#{issuer}?error=#{error.message}"
    end
  
    private
  
    def issuer
      ENV['CLIENT_URL']
    end
  end