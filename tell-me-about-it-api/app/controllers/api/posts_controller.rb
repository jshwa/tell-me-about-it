class Api::PostsController < ApplicationController
    before_action :set_post, only: [:show, :new, :edit, :destroy]

    def index
      if logged_in?
        render json: current_user.posts
      else
         render json: {status: "error", message: "User not logged in"}
      end
    end

    def show
        render json: @post
    end

    def new

    end

    def create

    end

    def edit

    end

    def update

    end

    def destroy

    end

    private

    def set_post
        @post = Post.find_by(id: params[:id])
    end
end
