class ApplicationController < ActionController::API
   def current_user
      if params[:token]
         token = params[:token]
         payload = TokenHandler.decode(token)
         @current_user ||= User.find_by_github_id(payload[0]['sub'])
      else
         @current_user = nil
      end
   end
    
      def logged_in?
        current_user != nil
      end
    
      def authenticate_user!
        head :unauthorized unless logged_in?
      end
end
