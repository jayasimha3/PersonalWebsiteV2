import 'bootstrap/dist/css/bootstrap.css';
import './BracketBug.css';
import BracketBug from './BracketBug.js';

export function ChampionsBowlBug() {
    return (
        <div class="container-sm bug-size">
            <ul class="list-group ">
                <li class="list-group-item cb-colors"><strong>CHAMPIONS BOWL LXXI</strong>
                <div class="mb-1 subtext">
                    <span class="badge host-village-3">Circuit Racing Co. Stadium, Village 3</span>
                </div>
                    <div class="text-body-secondary">
                        <span class="badge text-bg-light position-absolute top-0 end-0 translate-middle-y">February 12, 2023 <strong>6:30pm</strong></span>
                    </div>
                </li>
                <BracketBug></BracketBug> 
            </ul>
        </div>
    );
}