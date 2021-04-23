
const wordBank = {
    _categories: ['future', 'inspirational', 'funny'],
    _future: ['friends', 'strangers', 'dogs', 'gaming computers', 'sadness', 'riches', 'drama', 'happy memories', 'puppies', 'hunger', 'chores', 'success'],
    _inspirational: ['invest', 'eat', 'learn', 'donate', 'try again', 'learn', 'forgive', 'treat yourself', 'confess your love', 'improve yourself', 'start coding'],
    _funny: ['Voldemort', 'chicken nuggets', 'noobs', 'evil chickens', 'Santa Clause', 'Dwight Schrute', 'crying babies', 'Donald Trump', 'Steve Urkel'],
    
    generateCategory() {
        const index = Math.floor(Math.random() * 3);
        return this._categories[index];
    },

    generateWord(category) {
        let word;
        switch(category) {
            case 'future':
                word = this._future[Math.floor(Math.random() * this._future.length)];
                break;
            case 'inspirational':
                word = this._inspirational[Math.floor(Math.random() * this._inspirational.length)];
                break; 
            case 'funny':
                word = this._funny[Math.floor(Math.random() * this._funny.length)];
                break; 
        }
        return word;
    }
}

const fortunes = {
    _futureFortunes: [],
    _inspirationalFortunes: [],
    _funnyFortunes: [],

    set futureFortunes(string) {
        this._futureFortunes = [
            `${string} will be coming into your life...`, 
            `A lifetime of ${string} lies ahead of you.`,
            `${string} is in store for you.`
           ];
    },

    set inspirationalFortunes(string) {
        this._inspirationalFortunes = [
            `Don't just think. ${string}!`, 
            `Failure is the chance to ${string}.`,
            `Now is the time to ${string}.`
           ];
    },

    set funnyFortunes(string) {
        this._funnyFortunes = [
            `Help! I’m being held prisoner by ${string}!`, 
            `${string} rules the world.`,
            `You laugh now. Wait till you get home to ${string}.`
           ];
    },

    createFortune(category, word) {
        if(category === 'future'){
            this.futureFortunes = word;
        } else if(category == 'inspirational'){
            this.inspirationalFortunes = word;
        } else if(category == 'funny'){
            this.funnyFortunes = word;
        }
    },

    generateFortune(category) {
        if(category === 'future'){
            return this._futureFortunes[Math.floor(Math.random() * 3)]
        } else if(category == 'inspirational'){
            return this._inspirationalFortunes[Math.floor(Math.random() * 3)]
        } else if(category == 'funny'){
            return this._funnyFortunes[Math.floor(Math.random() * 3)]
        }
        
    }
};

const randomFortune = () => {
    const category = wordBank.generateCategory();
    const word = wordBank.generateWord(category);
    fortunes.createFortune(category, word)
    console.log(fortunes.generateFortune(category))
}

randomFortune();