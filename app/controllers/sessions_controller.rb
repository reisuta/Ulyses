# frozen_string_literal: true

class SessionsController < ApplicationController
  layout false
  def new; end

  def create
    user = User.find(params[:id])
  end
end
