class Api::PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]

    def index
      if logged_in?
        render json: current_user.posts.order(likes: :desc)
      else
         render json: {status: "error", message: "User not logged in"}
      end
    end

    def show
      if logged_in? && current_user.posts.include?(@post)
        render json: @post
      else
         render json: {status: "error", message: "User not logged in"}
      end
    end

    def create
      if logged_in?
         post = current_user.posts.build(post_params)
         if post.save
            render json: post
         else
            render json: {message: "Post not saved"}, status: 400
         end
      else
         render json: {status: 'error', message: "User not logged in"}
      end
    end

    def update
      if logged_in? && current_user.posts.include?(@post)
         if @post.update(post_params)
            render json: @post
         else
            render json: {message: "Post not saved"}, status: 400
         end
      else
         render json: {status: 'error', message: "User not logged in"}
      end

    end

    def destroy

    end

    private

    def set_post
        @post = Post.find_by(id: params[:id])
    end

    def post_params
      params.require('post').permit(:title, :content, :draft, :user_id, :likes, draft_json: {})
    end
end
