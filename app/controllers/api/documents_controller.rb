module Api
class DocumentsController < ApplicationController
  def index
    render json: { status: 'SUCCESS', message: 'Loaded posts' }
  end

  def show
  end

  def new
  end

  def update
  end

  def create
  end

  def edit
  end
end
end
