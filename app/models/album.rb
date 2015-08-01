# == Schema Information
#
# Table name: albums
#
#  id              :integer          not null, primary key
#  title           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :integer
#  list_id         :integer
#  cached_votes_up :integer          default(0)
#  featured        :boolean
#  artist_id       :integer
#

class Album < ActiveRecord::Base
  belongs_to :user
  belongs_to :list
  belongs_to :artist
  acts_as_votable
end
