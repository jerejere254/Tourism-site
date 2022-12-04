class BooksSerializer < ActiveModel::Serializer
  attributes :id, :site_id, :tourist_id, :site_title, :site_image, :site_price

  def site_title
    self.object.product["title"]
  end

  def site_image
    self.object.product["image_url"]
  end

  def site_price
    self.object.product["price"]
  end
end