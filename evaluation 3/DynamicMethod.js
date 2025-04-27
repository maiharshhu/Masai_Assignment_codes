sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function () {
        let checker = this.subject && this.verb && this.object
            ? this.subject + " " + this.verb + " " + this.object
            : "Incomplete Sentence!";
        return checker;
    },
    updateProperty: function (property, value) {
        const allowedProperties = ["subject", "verb", "object"];
        if (allowedProperties.includes(property)) {
            this[property] = value;
            return `Updated ${property} to "${value}"`;
        }
        else {
            return `Invalid property: "${property}"`;
        }

    }
};
Object.seal(sentenceBuilder);

console.log(sentenceBuilder.buildSentence());
// console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("obdddt", "JavaScript");
console.log(sentenceBuilder.buildSentence());
// sentenceBuilder.updateProperty("subject", "Yes I");
// console.log(sentenceBuilder.buildSentence());
// sentenceBuilder.updateProperty();
// console.log(sentenceBuilder.buildSentence());

