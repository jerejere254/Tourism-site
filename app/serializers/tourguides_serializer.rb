class TourguidesSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_type, :phone, :email
end
