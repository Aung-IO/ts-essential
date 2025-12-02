type Mapper = (item : string) => number;

const mapOverItems = (items : string[], map: Mapper) => {
return items.map(map);
}

const arraysOfNumbers = mapOverItems(['1', '2', '3'], (item) => {
    return parseInt(item, 10);
});

// optional parameters
type OptionalMapper = (item: string, index? :number) => number;

// rest parameters
type RestMapper = (item: string, ...rest: string[]) => number;