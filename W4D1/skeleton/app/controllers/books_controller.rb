class BooksController < ApplicationController
  def index
    @books = Book.all
    # render json: @books
    # your code here
  end

  def new
    render :new
    # your code here
  end

  def create
    book = Book.new(book_params)
    book.save
    redirect_to books_url
    # your code here
  end

  def destroy
    book = Book.find(params[:id])
    # if book.destroy
    #   render json: book
    # else
    #   render json: "cannot"
    # end
    book.destroy
    redirect_to books_url
    # your code here
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
