class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img_url, :type
end
