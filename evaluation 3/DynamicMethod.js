sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function (subject, verb, object) {
        let checker = this.subject && this.verb && this.object
            ? this.subject + " " + this.verb + " " + this.object
            : "Incomplete Sentence!";
        return checker;
    },
    updateProperty: function (property, value) {
        return this.hasOwnProperty(property) ? this[property] = value : "Invalid Property!";

    },
}

console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("object", "JavaScript");
console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("subject", "Yes I");
console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty();
console.log(sentenceBuilder.buildSentence());

