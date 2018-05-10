class UserMailer < ApplicationMailer
  default from: 'everybody@appacademy.io'

  def welcome_mail(user)
    @user = user
    @url = 'http://example.com/login'
    mail(to: user.username, subject: 'Welcome to the world of cats')
  end
end
