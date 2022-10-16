module DateConcern
  extend ActiveSupport::Concern

  # get date from date_select, params[:date_of_birth(3i)] for example
  def extract_date_from_params(date_field_name)
    %w(3 2 1).map { |e| params['user']["#{date_field_name}(#{e}i)"].to_i }
  end
  
end