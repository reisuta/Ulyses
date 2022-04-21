FROM ruby:3.0
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn
WORKDIR /ulyses
COPY Gemfile /ulyses/Gemfile
COPY Gemfile.lock /ulyses/Gemfile.lock
RUN gem install bundler
RUN bundle install && bundle update --bundler

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
