class Map

  def initialize
    @map = []
  end

  def assign(key,value)

  end

  def lookup(key)

  end

  def remove(key)
    @map.each_with_index do |entry, idx|
      @map.delete_at(idx) if entry[0] == key
    end
  end

  def show
    @map
  end

end
