# frozen_string_literal: true

ActiveRecord::Schema.define(version: 20_220_122_035_443) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'documents', force: :cascade do |t|
    t.string 'title'
    t.text 'body'
    t.boolean 'is_focus'
    t.integer 'status'
    t.string 'document_type'
    t.string 'file'
    t.integer 'category'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end
end
