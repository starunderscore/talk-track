# @spirit-code/talk-track

**Talk-Track** is a logging tool for recording full conversation sessions between users and AI, allowing you to log multiple back-and-forth messages within a single JSON file for each session.

## Installation

Install Talk-Track from npm:

```bash
npm install @spirit-code/talk-track
```

## Usage

### Basic Logging

To use Talk-Track, simply import the `log` function and provide it with a `role` and `message`. All messages in a session will be stored in a single JSON file with a unique timestamp.

#### Example

```typescript
import * as talkTrack from '@spirit-code/talk-track';

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
./@spirit-code/talk-track/<timestamp>.json
```

Each log file is named by the session start timestamp and contains an array of conversation entries, allowing you to store a full back-and-forth conversation in one file.

## API

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
