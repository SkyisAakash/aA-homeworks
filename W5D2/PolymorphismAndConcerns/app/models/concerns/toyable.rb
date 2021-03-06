module Toyable
  extend ActiveSupport::Concern

  included do
#All code within this block is executed whenever the module is
#included within the context of the class that includes it.
  has_many :toys, as: :toyable
  end

  def receive_toy(name)
    # This method should first find or create a toy whose name
    #matches the argument. Next it should add this toy to self's
    # toys. For both steps, you may wish to use the ActiveRecord #find_or_create_by
    # toys = Toy.find_or_create_by(name: name)
    # toys.each do |toy|
    #   self.toy = [toy.id]
    # end
    self.toys.find_or_create_by(name: name)
  end
end
