Sure! Here's the **formatted README** in **code form** so that you can directly copy-paste it:

```markdown
# 🚀 Node.js + Express + MongoDB with Auto-Generated Custom ID 🔑

This is a simple Node.js and Express application that automatically generates an additional unique ID (`customId`) for each document in MongoDB using `UUIDv4`, in addition to the default MongoDB `_id`.

## ✨ Features

- Automatically generates a `customId` using `UUIDv4` when creating new documents.
- Minimal setup with a single `server.js` file.
- MongoDB integration with Mongoose for schema and database operations.

## 🛠️ Installation and Setup

### 1️⃣ Clone the Repository

First, clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

Then, navigate into the project directory:

```bash
cd your-repo-name
```

### 2️⃣ Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

### 3️⃣ Create a `.env` File

Create a `.env` file in the root directory of the project, and add your MongoDB connection URI:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with the actual connection string to your MongoDB instance.

### 4️⃣ Start the Server

Start the Express server by running:

```bash
npm start
```

The server should now be running on the port you defined in your `.env` file (default: `5000`).

---

## 📋 API Usage

### ➡️ POST `/api/example`

This endpoint allows you to create a new document with a custom ID.

#### Example Request:

```bash
POST /api/example
Content-Type: application/json

{
  "name": "Sample Name",
  "description": "This is a sample description."
}
```

#### Example Response:

```json
{
  "_id": "64e1214e248ea2c3d5a87fdc",
  "customId": "2e1c9d3e-b48e-40dd-a383-e9389bb3f2ea",
  "name": "Sample Name",
  "description": "This is a sample description.",
  "__v": 0
}
```

- `_id`: The default MongoDB ObjectId.
- `customId`: A unique identifier generated using UUID.
- `name` and `description`: The data you provided.

### ❗ Error Handling

If something goes wrong during the request, you will receive a `500` status code along with an error message in the response.

#### Example Error Response:

```json
{
  "message": "Error creating example",
  "error": "Detailed error message"
}
```

---

## 🗂️ File Structure

This project is kept simple, with everything in a single `server.js` file.

```bash
my-express-app/
├── server.js       # Main application file
├── package.json    # Project configuration and dependencies
├── .env            # Environment variables (MongoDB URI and Port)
└── README.md       # This documentation file
```

### 📝 server.js

The core logic of the app is in `server.js`, where we:
- Connect to MongoDB.
- Define the Mongoose schema, including the `customId`.
- Create an Express route to handle document creation.

---

## 📦 Dependencies

- **express**: Web framework for building RESTful APIs.
- **mongoose**: MongoDB ODM to interact with the database.
- **uuid**: Used to generate unique custom IDs.
- **dotenv**: Loads environment variables from a `.env` file.

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

### 🎉 You're all set! Happy coding! 🚀
```
