Rails.application.routes.draw do
  namespace :api do
    resources :posts
  end

  get 'auth/github', to: 'authentication#github', format: false
end
