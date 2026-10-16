# 🔄 LoopGuard

A lightweight JavaScript utility that detects circular references in sequential node structures using an efficient two-pointer traversal algorithm.

---

## 📖 Project Overview

LoopGuard is a conceptual validation tool designed to detect infinite navigation loops inside linked structures.

In many real-world systems, nodes may unintentionally reference previous nodes, creating endless traversal cycles that can crash applications or consume unnecessary resources.

LoopGuard quickly identifies these circular references while using constant memory.

---

# 🌍 Real-World Concept

Imagine a workflow engine where every task points to the next task.

```
Task A
   ↓
Task B
   ↓
Task C
   ↓
Task D
   ↑
   └───────────┘
```

A configuration mistake creates an endless workflow.

LoopGuard detects the problem before execution begins.

Possible applications include:

- Workflow validation
- Navigation systems
- Linked data validation
- Configuration checking
- Memory structure verification
- State-machine validation

---

# 💡 Core Concept

Instead of remembering every visited node, LoopGuard uses two virtual inspectors.

- 🐢 Slow Pointer moves one step.
- 🐇 Fast Pointer moves two steps.

If both inspectors ever reach the same node again, a circular reference exists.

This approach keeps memory usage constant while maintaining excellent performance.

---

# ⚙️ How the System Works

1. Start both pointers at the beginning.
2. Move the slow pointer one node.
3. Move the fast pointer two nodes.
4. If both pointers meet, a loop exists.
5. If the fast pointer reaches the end, the structure is valid.

---

# 🧠 Algorithm Used

**Floyd's Tortoise and Hare Algorithm**

### Why this algorithm?

✅ O(n) traversal

✅ O(1) memory

✅ No extra data structures

✅ Ideal for linked sequential systems

---

# 🔄 Step-by-Step Logic

```
Start

Slow → A
Fast → A

↓

Slow → B
Fast → C

↓

Slow → C
Fast → A

↓

Slow → D
Fast → C

↓

Slow → A
Fast → A

Cycle Detected ✔
```

---

# ✨ Key Features

- 🔄 Detects circular references
- ⚡ Linear-time traversal
- 💾 Constant memory usage
- 🧩 Clean reusable utility
- 📦 Lightweight implementation
- 📖 Easy to understand
- 🚀 Suitable for educational projects

---

# 📌 Example Use Case

Suppose an application builds this linked structure:

```
Home

↓

Products

↓

Checkout

↓

Payment

↓

Products
```

Instead of ending normally, navigation returns back to Products forever.

LoopGuard detects this circular route immediately.

---

# 💻 Example

### Input

```javascript
const hasLoop = detectCircularReference(head);
```

### Output

```
true
```

---

# 📊 Complexity Analysis

| Operation | Complexity |
| ---------- | ---------- |
| Time | **O(n)** |
| Space | **O(1)** |

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Linked List
- Two-Pointer Technique
- Floyd Cycle Detection Algorithm

---

# 📁 Project Structure

```
LoopGuard
│
├── README.md
├── loopGuard.js
└── LICENSE
```

---

# 🚀 How to Run the Project

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/LoopGuard.git
```

Go into the project

```bash
cd LoopGuard
```

Run

```bash
node loopGuard.js
```

---

# 🎯 Learning Outcomes

This project demonstrates:

- Efficient pointer traversal
- Memory optimization
- Cycle detection strategies
- Linked data validation
- Algorithmic problem solving
- Writing reusable JavaScript utilities

---

# 🚀 Possible Future Improvements

- Graph visualization
- Circular path reporting
- Interactive CLI
- Browser playground
- TypeScript support
- Unit testing
- NPM package publishing
- Graph data support

---

# 📄 License

MIT License

Feel free to use, modify, and contribute.

---

⭐ If you find this project useful, consider giving it a star!
