module Api
  class DocumentsController < ApplicationController
    def index
      @documents = Document.all
    end

    def show
      #binding.pry
      @document = Document.find(params[:id])
    end

    def new
      @document = Document.new
    end

    def update
      @document = Document.find(params[:id])
      @document.update(document_params)
    end

    def create
      @document = Document.new(document_params)
      @document.save!
    end

    def edit; end

    private

    def document_params
      params.require(:params).require(:document).permit(
        :id,
        :title,
        :body,
        :category,
        :document_type,
        :file,
        :is_focus,
        :status,
        :created_at,
        :updated_at
      )
    end
  end
end
