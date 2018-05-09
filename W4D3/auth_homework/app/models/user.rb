# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueess: true
  validates :password_digest, presence: { mesage: "Password can't be blank" }
  validates :password_digest, length: { minimum: 4, allow_nil: true }, uniqueness: true
  before_validation :ensure_session_token
end
