import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Absolute path to the directory 'posts' where the .md files are
const dirAbsPath = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Read all files in the folder and present them in an array
    const fileNames = fs.readdirSync(dirAbsPath);
    // Create array of objects with all the metadata and ids
    const allPostsData = fileNames.map((filename) => {
        const id = filename.replace(/\.md$/, '');
        const fileContent = fs.readFileSync(
            path.join(dirAbsPath, filename),
            'utf8'
        );
        const metaData = matter(fileContent);

        return { id, ...metaData.data };
    });

    return allPostsData;
}
