class SitesAndTourguidesSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :remaining, :image_url, :username, :phone, :email, :address
  

  def username
    self.object.tourguide.username
  end

  def phone
    self.object.tourguide.phone
  end

  def email
    self.object.tourguide.email
  end

  def address
    self.object.tourguide.address
  end
end