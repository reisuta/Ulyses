# frozen_string_literal: true

FactoryBot.define do
  factory :document do
    title { 'MyString' }
    body { 'MyText' }
    is_focus { false }
    status { 1 }
    document_type { 'MyString' }
    file { 'MyString' }
    category { 1 }
  end
end
