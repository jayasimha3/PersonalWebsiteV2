import 'bootstrap/dist/css/bootstrap.css';
import './BracketBug.css';

export default function BracketBug() {
    return (
        <div>
            <li class="list-group-item rockets-primary">Village 17 <strong>ROCKETS</strong>
            <span class="position-absolute top-50 start-0 translate-middle badge rounded-pill seed-color">1
                <span class="visually-hidden">VFC #1 Seed</span>
            </span>
            <p class="mb-1 subtext">VFC North <strong>13-5-1</strong> (4-1-1)</p>
            <span class="badge score position-absolute top-50 start-100 translate-middle"><h4>33</h4></span>                    
            </li>

            <li class="list-group-item warriors-primary">Villager <strong>WARRIORS</strong>
            <span class="position-absolute top-50 start-0 translate-middle badge rounded-pill seed-color">6
                <span class="visually-hidden">VAC #6 Seed</span>
            </span>
            <p class="mb-1 subtext">VAC South <strong>14-6</strong> (1-4)</p>
            <span class="badge score position-absolute top-50 start-100 translate-middle"><h4>31</h4></span>    
            </li>
        </div>
    );
}