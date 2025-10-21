import Tweet from '../models/tweet.js';

class TweetRepository {
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet; 
        } catch (error) {
            console.log(error);
        }
    }

    async get() {
         try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
         try {
            const tweet = await Tweet.findById(id).populate('comments');
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async destroy(id) {
         try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
          try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;