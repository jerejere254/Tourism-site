class BooksSerializer < ActiveModel::Serializer
  attributes :id, :site_id, :tourist_id, :site_title, :site_image, :site_price

  def site_title
    self.object.site["title"]
  end

  def site_image
    self.object.site["image_url"]
  end

  def site_price
    self.object.site["price"]
  end
end