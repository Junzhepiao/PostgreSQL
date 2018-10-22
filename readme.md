# Transaction App | Database
We're getting the ball rolling on our transaction tracking application.
The goal of this application is to allow users to log in and track transactions that they've made. This could be used for a variety of things from expense reporting to just keeping yourself accountable. The application itself is fairly simple. The difficult part of this project is creating an architecture that could handle millions of users using the application daily.

This project will be built in stages, each is meant to build on top of each other and the goals will be very open ended. You're free to use *any* technologies that you want to accomplish these goals.

## Database Structure
Our transaction database will be made up of two tables. A users table and a transactions table. Here's what columns these tables should contain:


**Users**
- id
- email
- password
- created_at
- updated_at

**Transactions**
- id
- user_id
- amount
- type
- business_name
- created_at
- updated_at

## Goals

Your goal is simple. Get the fastest time possible for inserting / reading 1,000,000 records.
Here's the exact metrics you're testing
- Total time to insert 1,000,000 transactions
- Total time to read 1,000,000 transactions
- Total time to read 1,000,000 transactions with join (most important!!!)

**NOTE** - You're gonna have to insert some users since transactions needs to reference a user. You can just create 1-10 users to test with.

You have full freedom to use whatever database you want for this but here's some tips to help give some direction.
- Try more than one type of database ( don't just use postgres, try other databases like cassandra, mongodb, mysql ect )
- The columns intentionally don't have a data type listed. Try different types and see how it effects your times.
- research research research. Make sure you understand why things are improving speed.

**IMPORTANT FINAL NOTE** - PLEASE KEEP TRACK OF HOW YOUR TIME IMPROVES AND WHAT YOU DID TO IMPROVE IT EACH TIME. You'll use this data to present to the class.
