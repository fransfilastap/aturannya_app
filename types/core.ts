export type Entity = {
    Id: string;
    Name: string;
    Description: string;
}

export type Initiator = {
    Id: string;
    Name: string;
}

export type OPolicy = {
    Id: number;
    On: string;
    Number: string;
    Year: string;
    Entity: Entity;
    Initiator: Initiator;
    EnactedAt: string;
    EnactedIn: string;
    IssuedAt: string;
    IssuedIn: string;
    InForceSince: string;
    PolicyFiles : OPolicyFile[];
}

export type OPolicyFile = {
    Id: number;
}
