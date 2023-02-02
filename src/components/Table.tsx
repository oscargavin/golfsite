import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    club: string;
    score: number;
    hindex: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Club',
        dataIndex: 'club',
        key: 'club',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'Handicap Index',
        dataIndex: 'hindex',
        key: 'hindex',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.club}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        club: 'Royal Lytham & St Annes',
        score: 84,
        hindex: '15.2',
        tags: ['hard', 'links'],
    },
    {
        key: '2',
        club: 'Royal St George\'s',
        score: 89,
        hindex: '14.6',
        tags: ['scenic', 'links'],
    },
    {
        key: '3',
        club: 'Augusta National',
        score: 85,
        hindex: '13.2',
        tags: ['beautiful'],
    },
    {
        key: '4',
        club: 'Pine Valley',
        score: 86,
        hindex: '12.8',
        tags: ['scenic', 'links'],
    },
    // {
    //     key: '5',
    //     club: 'Pebble Beach',
    //     score: 87,
    //     hindex: '12.4',
    //     tags: ['scenic', 'links'],
    // },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;