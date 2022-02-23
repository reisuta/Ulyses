# frozen_string_literal: true

class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.string :title
      t.text :body
      t.boolean :is_focus
      t.integer :status
      t.string :document_type
      t.string :file
      t.integer :category

      t.timestamps
    end
  end
end
