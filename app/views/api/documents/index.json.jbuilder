json.records do
  json.array!(@documents) do |document|
    json.extract! document, *%i[
      id
      title
      body
      is_focus
      status
      document_type
      file
      category
      created_at
      updated_at
    ]
  end
end

