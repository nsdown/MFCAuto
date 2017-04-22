/// <reference types="node" />
import { EventEmitter } from "events";
import { FCTYPE } from "./Constants";
import { Packet } from "./Packet";
export declare class Client implements EventEmitter {
    sessionId: number;
    username: string;
    password: string;
    uid: number;
    private net;
    private choseToLogIn;
    private completedModels;
    private serverConfig;
    private streamBuffer;
    private streamBufferPosition;
    private emoteParser;
    private client;
    private keepAlive;
    private currentlyConnected;
    private manualDisconnect;
    private reconnectTimer?;
    private static userQueryId;
    private trafficCounter;
    private loginPacketReceived;
    private static connectedClientCount;
    private static initialReconnectSeconds;
    private static maximumReconnectSeconds;
    private static currentReconnectSeconds;
    constructor(username?: string, password?: string);
    addListener: (event: string, listener: ClientEventCallback) => this;
    on: (event: string, listener: ClientEventCallback) => this;
    once: (event: string, listener: ClientEventCallback) => this;
    prependListener: (event: string, listener: ClientEventCallback) => this;
    prependOnceListener: (event: string, listener: ClientEventCallback) => this;
    removeListener: (event: string, listener: ClientEventCallback) => this;
    removeAllListeners: (event?: string) => this;
    getMaxListeners: () => number;
    setMaxListeners: (n: number) => this;
    listeners: (event: string) => ClientEventCallback[];
    emit: (event: string, ...args: any[]) => boolean;
    eventNames: () => string[];
    listenerCount: (type: string) => number;
    private _readData(buf);
    private _packetReceived(packet);
    private _readPacket();
    private _handleExtData(extData);
    processListData(rdata: any): any;
    EncodeRawChat(rawMsg: string): Promise<string>;
    private loadFromMFC(url, massager?);
    private ensureEmoteParserIsLoaded();
    private ensureServerConfigIsLoaded();
    TxCmd(nType: FCTYPE, nTo?: number, nArg1?: number, nArg2?: number, sMsg?: string): void;
    TxPacket(packet: Packet): void;
    static toUserId(id: number): number;
    static toRoomId(id: number): number;
    sendChat(id: number, msg: string): Promise<void>;
    sendPM(id: number, msg: string): Promise<void>;
    joinRoom(id: number): Promise<Packet>;
    leaveRoom(id: number): Promise<void>;
    queryUser(user: string | number): Promise<{}>;
    connect(doLogin?: boolean): Promise<{}>;
    private disconnected();
    login(username?: string, password?: string): void;
    connectAndWaitForModels(): Promise<{}>;
    disconnect(): Promise<{}>;
}
export declare type ClientEventCallback = (packet?: Packet) => void;
