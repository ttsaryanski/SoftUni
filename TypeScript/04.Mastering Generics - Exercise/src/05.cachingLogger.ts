enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text",
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>;
    log(logLevel: T, message: string): void;
    getFormat(): V;
}

class Logger<T extends LoggingLevel, V extends LoggingFormat>
    implements CachingLogger<T, V>
{
    cachedLogs: Map<T, string[]> = new Map();
    private format: V;

    constructor(format: V) {
        this.format = format;
    }

    log(logLevel: T, message: string): void {
        const date = new Date().toISOString();

        const newMessage = this.format
            .replace("%level", logLevel)
            .replace("%date", date)
            .replace("%text", message);

        const currentMessages = this.cachedLogs.get(logLevel);
        console.log(newMessage);

        if (currentMessages) {
            currentMessages.push(newMessage);
            this.cachedLogs.set(logLevel, currentMessages);
        } else {
            this.cachedLogs.set(logLevel, [newMessage]);
        }
    }

    getFormat(): V {
        return this.format;
    }
}

// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
// logger.log(LoggingLevel.Info, "This is an info message.");
// logger.log(LoggingLevel.Info, "Another message.");
// logger.log(LoggingLevel.Error, "Something went wrong.");
// logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
// logger.log(LoggingLevel.Debug, "Running the debugger.");

// console.log("-----------");
// console.log(
//     [...logger.cachedLogs.entries()].map((x) => x[1].join("\n")).join("\n")
// );

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);
logger.log(LoggingLevel.Info, "Just a simple message.");
logger.log(LoggingLevel.Error, "A Problem happened.");
console.log("-----------");
console.log(logger.getFormat());
console.log(
    [...logger.cachedLogs.entries()].map((x) => x[1].join("\n")).join("\n")
);

// let logger = new Logger<LoggingLevel, LoggingFormat>("%text"); //TS Error
// let wronglogger = new Logger<string, LoggingLevel>();          //TS Error
// logger.log("%s", "Running the debugger.");                     //TS Error
// logger.log({format: "Test %s"}, "Running the debugger.");      //TS Error
