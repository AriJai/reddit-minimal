# Reddit Minimal

A user-friendly, Reddit browsing experience built with React and Redux. Reddit Minimal removes the complexity of the standard Reddit interface, and focuses on a clean presentation with minimum navigation.

## Features
- **Clean Interface**: Minimal design that prioritizes content for users.
- **Real-time Search**: Search subreddits with related suggestions.
- **Dynamic Content**: Quickly view posts from any subreddit with smooth loading states.
- **Nested Comments**: View comments within posts in an collapsible section.
- **Media Support**: Displays images, galleries, and video (currently without sound).
- **Responsive Design**: Designed for web and mobile devices.
- **Markdown Rendering**: Formatted text and comments.

## Technologies Used
### Core Framework & State Management
#### **React 18.x**: 
- Component-based UI architecture for efficient rendering and reusability.
- Hooks to manage local and global state efficiently.
- Smooth, reactive user experience when toggling comments and replies.
#### **Redux Toolkit**:
- Centralized state management for posts, subreddits, and UI state.
- ````createAsyncThunk```` used to handle Reddit API calls, while handling error or loading states.
- Distinct slices to organize application state logically.
#### **React-Redux**:
- Seamless integration between React components and Redux store.

### UI & Styling
#### **CSS Modules**:
- Separated modules to prevent class name collisions and maintain component isolation.
#### **Custom CSS Animation**:
- Skeleton loading states and transitions for better UX.

### Content Rendering
#### **react-markdown**:
- Transforms Reddit's Markdown content into formatted HTML.
- Preserves formatting from original posts and comments.

### API Integration
#### **Reddit JSON API**:
- Direct API calls to Reddit's public JSON endpoints.
- Fetches posts, comments, and subreddit data.
- ````raw_json=1```` parameter ensures clean data without HTML language.
- Support for various content types such as: images, posts, galleries.

## Getting Started
### Visit my site [here](https://arijai.github.io/reddit-minimal/)
### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
### Installation
1. Clone the repository:
```bash
git clone https://github.com/AriJai/reddit-minimal.git
cd reddit-minimal
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```
4. Open http://localhost:3000 to view it in your bowser.

## How It Works
## Note
- At this time there is a current bug with the call to Reddit's API.
  - Open your devTools -> Network -> Disable Cache, which should solve this issue for now.
### Search & Discovery Flow
1. **User Input**: User types a search query in the header search bar. The search will trigger subreddit autocompletions.
2. **Suggestions**: Dropdown displays matching subreddits with icons.
3. **Content Loading**: Selecting a subreddit fetches top 30 posts from that community.
4. **Related Communities**: Second panel updates with related subreddits based on search.

## Author
AriJai

## Acknowledgements
- Reddit for providing a public JSON API
- React and the React community
- Redux Toolkit
