import { render, screen, article } from '@testing-library/react';
import List from '../list';

test('renders multiple items', () => {
    const testData = [
        { name: 'Ontario', capital: 'Toronto', flagUrl: '/flags/ontario.png' },
        { name: 'Quebec', capital: 'Quebec City', flagUrl: '/flags/quebec.png' },
    ];
    render(<List data={testData} />);
    expect(screen.getByText('Ontario')).toBeInTheDocument();
    expect(screen.getByText('Quebec')).toBeInTheDocument();
});

