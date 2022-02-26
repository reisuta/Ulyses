# frozen_string_literal: true

class Document < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  enum status: { unpublished: 1, published: 2, done: 3 }
end
