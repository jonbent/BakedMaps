
ActionDispatch::Request.parameter_parsers[:json] = -> (raw_post) {
  # Modified from action_dispatch/http/parameters.rb
    data = Rack::Utils.parse_nested_query(raw_post)
    data.deep_transform_keys!(&:underscore)
}