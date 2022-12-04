class TouristsSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_type, :phone, :email, :address, :bio, :image_url
end
