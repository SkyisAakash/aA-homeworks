class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @seq = []
    @game_over = false
  end

  def play
    take_turn until game_over
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    if @game_over == false
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts("There are #{sequence_length} colors in sequence. Enter your guess using #{COLORS} colors")
    gets.chomp
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Congratulations, you guessed correctly. Time for another round"
  end

  def game_over_message
    "Game Over!, Play again:)"
  end

  def reset_game
    @game_over = false
    @seq = []
    @sequence_length = 1
  end
end
