# @spirit-code/talk-track

**Talk-Track** is a logging tool for recording full conversation sessions between users and AI, allowing you to log multiple back-and-forth messages within a single JSON file for each session.

## Installation

Install Talk-Track from npm:

```bash
npm install @spirit-code/talk-track
```

## Usage

### Configuring Talk-Track

To configure Talk-Track dynamically, use the `config` method. You can enable or disable console logging by setting `debug` to `true` or `false`.

#### Example

```javascript
const talkTrack = require('@spirit-code/talk-track');

// Enable debug logging
await talkTrack.config({ debug: true });
```

### Basic Logging

Once configured, you can start logging messages. Simply use the `log` method and provide a `role` and `message`. All messages in a session will be stored in a single JSON file with a unique timestamp.

#### Example

```javascript
talkTrack.log({
  role: 'user',
  message: 'Hello, Talk-Track!'
});

talkTrack.log({
  role: 'AI',
  message: 'Hello! How can I assist you today?'
});
```

### Directory Structure

Talk-Track saves logs to the following directory structure:

```
./.spirit-code/talk-track/<timestamp>.json
```

Each log file is named by the session start timestamp and contains an array of conversation entries, allowing you to store a full back-and-forth conversation in one file.

## API

### `talkTrack.config({ debug: boolean })`

Configures Talk-Track with custom settings.

- **debug**: `boolean` — Enables or disables console logging. Set `debug: true` to allow console logs during logging operations.

#### Example

```javascript
await talkTrack.config({ debug: true });
```

### `talkTrack.log({ role, message })`

Logs a message with the specified role and content in the active conversation file for the session.

- **role**: `string` — Represents the source or type of the message. Flexible to accept any string, allowing custom roles like `'user'`, `'AI'`, `'system'`, `'admin'`, etc.
- **message**: `string` — The message text.

### Example in TypeScript

```typescript
talkTrack.log({
  role: 'user',
  message: 'Can you explain quantum mechanics?'
});

talkTrack.log({
  role: 'AI',
  message: 'Quantum mechanics studies the behavior of particles on an atomic level...'
});
```

## Example Output

A single JSON file for a session with multiple messages:

```json
[
  {
    "timestamp": "2024-11-05T10:30:00.000Z",
    "processId": "a1b2c3d4-5e6f-7g8h-9i10j11k12l13",
    "role": "user",
    "message": "Hello, Talk-Track!"
  },
  {
    "timestamp": "2024-11-05T10:30:10.000Z",
    "processId": "a1b2c3d4-5e6f-7g8h-9i10j11k12l13",
    "role": "AI",
    "message": "Hello! How can I assist you today?"
  },
  {
    "timestamp": "2024-11-05T10:30:20.000Z",
    "processId": "a1b2c3d4-5e6f-7g8h-9i10j11k12l13",
    "role": "user",
    "message": "Can you explain quantum mechanics?"
  }
]
```

## License

MIT License. See the [LICENSE](./LICENSE) file for more information.

---

With **Talk-Track**, you can log entire conversations in one organized file, simplifying tracking, debugging, and reviewing interactions.