class SitesSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :image_url, :remaining, :tourguide_id
end
