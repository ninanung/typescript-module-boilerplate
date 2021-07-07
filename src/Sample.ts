class Sample {
    private sample = '';

    constructor(sample: string) {
        this.sample = sample;
    }

    public getSample(): string {
        return this.sample;
    }
}

export default Sample;