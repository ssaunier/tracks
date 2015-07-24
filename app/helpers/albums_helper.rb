module AlbumsHelper
  def get_date(index)
    date = Date.today - index
    {
      day: index != 0 ? date.strftime("%A") : "TODAY",
      meta: date.strftime("%B #{date.day.ordinalize}")
    }
  end
end
